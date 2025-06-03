import { MouseEventHandler } from "react";

export interface SeparatorProps {
    containedStyles?: string
}

export interface TopBarItemProps {
    containedStyles: string,
    link: boolean,
    iconName: string,
    description: string
}

export interface NavbarProps {
    openMenu: boolean, 
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> 
}

export interface NavBarItemProps {
    title: string,
    link: string
}

export interface NavBarInfoProps {
    title: string,
    location: string,
    city: string,
    schedule: string,
    email: string,
    contact: string,
    phone: string
}

export interface NavbarFigureProps {
    containedStyles: string
}

export interface NavBarButtonsProps {
    handleButtonsMenu: MouseEventHandler<HTMLButtonElement>
}

export interface NavbarOpenProps extends NavBarButtonsProps {
    containedStyles: string
}

export interface HeroSliderProps {
    currentSlidePosition: number
}

export interface SliderItemProps {
    image: string, 
    subtitle: string, 
    title: string, 
    text: string,
    active: boolean
}

export interface SliderButtonProps { 
    direction: string,
    icon: string,
    handleSlide: (direction: string, event?: MouseEventHandler<HTMLButtonElement>) => void; 
}

export interface ServiceCardProps { 
    cardNumber: number, 
    cardTitle: string 
}

export interface MenuCardProps extends ServiceCardProps {
    activeVegetarian?: boolean,
    activeSeasonal?: boolean,
    activeNew?: boolean,
    cardPrice?: number,
    cardDate?: string,
    cardDescription: string 
}

export interface ReservationFormRightScheduleProps {
    menu: string, 
    schedule: string
}

export interface ReservationFormIconWrapperProps {
    iconType: string, 
    options: string[]
}

export interface FooterLinkProps {
    href: string, 
    name: string
}

export interface FooterListProps {
    list: FooterLinkProps[]
}

























