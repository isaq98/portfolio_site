import { useState, useEffect } from 'react';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

   useEffect(() => {
        let lastYOffset = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastYOffset ? 'down' : 'up';
            if(direction !== scrollDirection && (scrollY - lastYOffset > 10 || scrollY - lastYOffset < -10)) {
                setScrollDirection(direction);
            }
            lastYOffset = scrollY > 0 ? scrollY : 0;
        }     
        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        }
    }, [scrollDirection]);

    return scrollDirection
}

export default useScrollDirection;