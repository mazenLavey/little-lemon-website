import { useEffect, useState } from "react"

const useMedia = ()=>{
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 767px)").matches);

    useEffect(()=>{
        function checkMedia() {
            const updateMedia = window.matchMedia("(max-width: 767px)").matches;
            setIsSmallScreen(updateMedia);
        };
        window.addEventListener('resize', checkMedia);

        return ()=>{
            window.removeEventListener('resize', checkMedia);
        }

    }, []);

    return {isSmallScreen}
};

export default useMedia;

