import { CityOption } from "src/types"
import _ from "lodash"

export const getGroupedOptions = (options: CityOption[] | undefined) => {
    if (!options) {
        return []
    }
    const groups = _.uniqBy(options, 'group').map((item) => {
        const filteredOptions = options.filter((option) => {
            return item.group === option.group
        })
        return {
            label: item.group,
            options: filteredOptions
        }
    })
    return groups
}