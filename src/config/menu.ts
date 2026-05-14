import {
    ChartGantt,
    Gauge,
    LucideIcon
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Form Inpatien',
        url: '/',
        icon: Gauge
    },
    {
        title: 'List Inpatient',
        url: '/list',
        icon: ChartGantt,
    },
]
