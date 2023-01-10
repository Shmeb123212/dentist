import { CalendarDaysIcon, Cog8ToothIcon, DocumentDuplicateIcon, FolderOpenIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import BillingImg from './../src/assets/hospital-billing-payment-svgrepo-com.svg';

const initialStore = [
    {id:1,priority:1, nameItem: 'Календарь', link: '/calendar', active: true, img: <CalendarDaysIcon color="#8895a2" width={26} height={26}/>},
    {id:2,priority:1, nameItem: 'Пациенты', link: '/patients', active: false, img: <UserGroupIcon color="#8895a2" width={26} height={26} />},
    {id:3,priority:1, nameItem: 'Персонал', link: '/staff/doctors', active: false, img: <svg width="800x" height="800px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M222 76C210.988 106.84 171.627 128.31 147 132" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M236 44.053C123.346 20.1218 96.7679 144.026 136.104 167" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M256 54C302.745 75.4047 288.975 108.654 272.736 144" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M260.902 122C295.577 228.082 142 250.963 142 156.601" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M218.892 153C219.298 150.031 218.46 147.754 218 145" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M191 154C191 151.332 191 148.668 191 146" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 345.501C60 309.522 83.3747 224.325 163.582 228.248C185.925 229.341 191.24 351.835 206.062 345.501C232 334.416 223.446 254.231 243.571 224.158C340.019 219.027 341 340.572 341 359" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M296 271C288.365 253.665 267.103 230.409 247 228" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M163 232C139.27 246.396 128.966 267.837 120 292" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M93.0228 347.996C90.4525 330.039 91.6852 307.132 109.075 296.665C157.969 267.237 151.718 362.878 128.138 345.983" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M293.07 271.039C321.891 269.785 283.781 299.392 290.907 273.038" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M304 324.289C291.859 322.728 282.476 327.953 271 329" stroke="#8895a2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> }, 
    {id:4,priority:1, nameItem: 'Услуги', link: '/services', active: false, img: <FolderOpenIcon color="#8895a2" width={26} height={26} />},
    {id:5,priority:2, nameItem: 'Биллинг', link: '/billing', active: false, img: <DocumentDuplicateIcon color="#8895a2" width={26} height={26}n/>},
    {id:6,priority:2, nameItem: 'Настройки', link: '/settings', active: false, img: <Cog8ToothIcon color="#8895a2" width={26} height={26} />},
]




export const SidebarReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'ACTIVE_ITEM_SIDEBAR': {
            return state.map(e=>e.id === action.info.id ? {...e, active: true} : {...e, active:false})
        }
    
        default:
            return state
    }
}



export const activeItemSidebar = (info)=>({
    type: 'ACTIVE_ITEM_SIDEBAR', info
})