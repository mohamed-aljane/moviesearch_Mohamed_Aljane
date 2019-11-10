import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MovieCard = (props) => {
    const classes = useStyles();
    let movie = props.movie;
    let src = movie.show.image ? movie.show.image.medium : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg';


    return (
        <Link to={{
            pathname: '/moviedetails/' + movie.show.name,
            state: { movie }
        }}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={src}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                            {movie.show.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            this movie collected an overall score of {movie.score} , i recommend it
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        see more details
        </Button>

                </CardActions>
            </Card>
        </Link>


    );
}
export default MovieCard;