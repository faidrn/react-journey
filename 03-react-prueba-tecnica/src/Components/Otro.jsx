import { useCatImage } from "../hooks/useCatImage"

export const Otro = () => {
    const { imageUrl } = useCatImage({ fact: "Random fact" })
    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}