export const Image = ({ slice }) => {
    const imageUrl = slice.primary.image.url;
    return (
        <div
            className="full-width-image single"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
    ) 
};
