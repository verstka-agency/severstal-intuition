export function runTypograph(stringToParse: string) {
    if (!stringToParse) return stringToParse

    const noBreakSpace_beforeNBSP = "б|бы|ж|же|ли|ль"
    const noBreakSpace_afterNBSP = "а|б|без|безо|будто|бы|в|во|ведь|вне|вот|всё|где|да|даже|для|до|если|есть|ещё|же|за|и|из|изо|из-за|из-под|или|иль|к|ко|как|ли|ли|либо|между|на|над|надо|не|ни|но|о|об|обо|около|оно|от|ото|перед|по|по-за|по-над|под|подо|после|при|про|ради|с|со|сквозь|так|также|там|тем|то|тогда|того|тоже|у|хоть|хотя|чего|через|что|чтобы|это|№|§|АО|ОАО|ЗАО|ООО|ПАО"

    // Пробелы ПЕРЕД
    const _dataBeforeNBSP = noBreakSpace_beforeNBSP

    // Пробелы ПОСЛЕ
    const _dataAfterNBSP = noBreakSpace_afterNBSP

    const _nbsp = '\u00A0'

    function deleteSpaces() {
        // Удаляем пробелы ПОСЛЕ « „ ( [
        stringToParse = stringToParse.replace(/(\«|\„|\u0022|\u0028|\u005B)\s+/gm, function (match, p1) {
            return p1
        })

        // Удаляем пробелы ПЕРЕД . … : , ; ? ! » “ "" ) ]
        stringToParse = stringToParse.replace(/\s+(\.|\…|\:|\,|\;|\?|\!|\»|\“|\u0022|\u0029|\u005D)/gm, function (match, p1) {
            return p1
        })

        // Удаляем пробелы перед числом и %
        stringToParse = stringToParse.replace(/(\d)\s+(\%)/gm, function (match, p1, p2) {
            return p1 + p2
        })

        // Удаляем пробелы между т. п. и т. д.
        stringToParse = stringToParse.replace(/((\u0020|\u00A0)(т\.))\s+((д\.)|(п\.))/gm, function (match, p1, p2, p3, p4) {
            return p1 + p4
        })

        // Если в строке только пробельные символы, ничего не меняем
        if (stringToParse.search(/[^\s]/gm) != -1) {
            // Иначе удаляем пробелы в начале и конце строки
            stringToParse = stringToParse.trim()
            // Удаляем двойные пробелы
            stringToParse = stringToParse.replace(/(\u0020|\u00A0){2,}/gm, function () {

                return " "
            })
        }
    }

    function addNoBreakSpace() {
        let regexp
        let regexpBefore
        let regexpAfter

        // Неразрывные пробелы между словом и и т.д. и т.п. и др.
        stringToParse = stringToParse.replace(/(.)\u0020+(и)\u0020+((т\.д\.)|(т\.п\.)|(др\.))/g, function (match, p1, p2, p3) {
            return p1 + _nbsp + p2 + _nbsp + p3
        })

        // Неразрывный пробел ПЕРЕД б, бы, ж, же, ли, ль
        regexpBefore = new RegExp('\\u0020(' + _dataBeforeNBSP + ')([^А-ЯЁа-яё])', 'gim')
        stringToParse = stringToParse.replace(regexpBefore, function (match, p1, p2) {
            return _nbsp + p1 + p2
        })

        // Неразрывный пробел ПОСЛЕ
        regexpAfter = new RegExp('(^|[\\u0020«„\\"\\(\\[])(' + _dataAfterNBSP + ')\\u0020', 'gim')
        stringToParse = stringToParse.replace(regexpAfter, function (match, p1, p2) {
            return p1 + p2 + _nbsp
        })

        // Неразрывный пробел между числом и следующим словом
        stringToParse = stringToParse.replace(/(\d)\u0020+([a-zа-яё])/gi, function (match, p1, p2) {
            return p1 + _nbsp + p2
        })

        // Неразрывный пробел между словом и длинным тире
        stringToParse = stringToParse.replace(/([a-zа-яё])\u0020*—/gi, function (match, p1) {
            return p1 + '\u00A0—'
        })

        // Неразрывный пробел между числами
        stringToParse = stringToParse.replace(/(\d)\u0020+(\d+)([.,]\d+)?/g, function (match, p1, p2, p3) {
            return p1 + '\u00A0' + p2 + (p3 || '')
        })

        // Неразрывный пробел ПОСЛЕ сокращенbй город, область, край, станция, поселок, село, деревня, улица, переулок, проезд, проспект, бульвар, площадь, набережная, шоссе, тупик, офис, комната, участок, владение, строение, корпус, дом, квартира, микрорайон
        stringToParse = stringToParse.replace(/(^|\,[\u0020\u00A0])(г|обл|кр|ст|пос|с|д|ул|пер|пр|пр-т|просп|пл|бул|б-р|наб|ш|туп|оф|кв|комн?|под|мкр|уч|вл|влад|стр|корп?|эт|пгт)\.\u0020?(\-?[А-ЯЁ\d])/gm, function (match, p1, p2, p3) {
            return p1 + p2 + '.' + _nbsp + p3
        })

        // Неразрывный пробел ПОСЛЕ короткого слова
        regexp = new RegExp('(^|[\\u0020\\u00A0«„\\"\\(\\[])([А-ЯЁа-яё]{1,3})\\u0020', 'gim')
        stringToParse = stringToParse.replace(regexp, function (match, p1, p2) {
            return p1 + p2 + _nbsp
        })

        // Неразрывный пробел ПЕРЕД последним коротким словом в предложении или одиночной строке
        stringToParse = stringToParse.replace(/\u0020([а-яё]{1,3}[!?…»]?$)/gmi, function (match, p1) {
            return _nbsp + p1
        })
        regexp = new RegExp('\\u0020([а-яё]{1,3}[\\.!?…](\\u0020.|$))', 'gmi')
        stringToParse = stringToParse.replace(regexp, function (match, p1) {
            return _nbsp + p1
        })
        regexp = new RegExp('\\u0020([а-яё]{1,3}[\\.!?…][\\)\\]](\\u0020.|$))', 'gmi')
        stringToParse = stringToParse.replace(regexp, function (match, p1) {
            return _nbsp + p1
        })
        regexp = new RegExp('\\u0020([а-яё]{1,3}[\\)\\]][\\.!?…](\\u0020.|$))', 'gmi')
        stringToParse = stringToParse.replace(regexp, function (match, p1) {
            return _nbsp + p1
        })
        regexp = new RegExp('\\u0020([а-яё]{1,3}[!?…][\\"»](\\u0020.|$))', 'gmi')
        stringToParse = stringToParse.replace(regexp, function (match, p1) {
            return _nbsp + p1
        })
        regexp = new RegExp('\\u0020([а-яё]{1,3}[!?…]?[\\"»][\\.!?…](\\u0020.|$))', 'gmi')
        stringToParse = stringToParse.replace(regexp, function (match, p1) {
            return _nbsp + p1
        })
    }

    deleteSpaces()
    addNoBreakSpace()

    return stringToParse
}
