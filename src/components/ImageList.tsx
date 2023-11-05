import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type ImageItems = { itemData: string[] }

export default function StandardImageList({ itemData }: ImageItems) {
    return (
        <ImageList
            variant="masonry"
        >
            {itemData.map((item, index) => (
                <ImageListItem key={index}>
                    <img
                        srcSet={`${item}`}
                        src={`${item}`}
                        alt={item}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}