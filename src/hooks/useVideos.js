import axios from "axios"
import { useEffect, useState } from "react"

const useVideos = () => {
    const [videos, setVideos] = useState()
    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxMwUwnR-3PYdIpdDdaeNKTGdDWPcHSODeGrPjG3tolpDOSSOiycG-i26UaizvavT_tDg/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setVideos(data))
            .catch(err => console.log(err))
    }, [])
    return videos
}

export default useVideos