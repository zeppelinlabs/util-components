import { useEffect, useRef, useState } from "react"

export const disabledClickOutSideSelector = "disabled-clickOutSide-selector"

export const useClickOutside = (clickOutsideCallback?: () => void) => {

    const [isOpenValue, setIsOpenValue,] = useState(false)
    const elementRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (ev: MouseEvent) => {
            if (document.querySelector(`.${disabledClickOutSideSelector}`)) {
                return
            }

            if (isOpenValue
                && elementRef.current
                && !elementRef.current.contains(ev.target as Node)) {
                setIsOpenValue(false)
                clickOutsideCallback && clickOutsideCallback()
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpenValue, setIsOpenValue,])

    const toggleIsOpen = () => {
        setIsOpenValue(prevState => !prevState)
    }

    const setIsOpen = (open: boolean) => {
        setIsOpenValue(open)
    }

    return {
        isOpen: isOpenValue,
        setIsOpen,
        toggleIsOpen,
        elementRef,
    }
}