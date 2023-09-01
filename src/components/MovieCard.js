import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({id, image, title, moviename, category}) {

    const navigate = useNavigate();

    const visitDetailPage = (id) => {
        navigate('/downloadanime',{state:{id:id}});
    }

    return (
        <Card className='cardBody pointer' onClick={()=> visitDetailPage(id)} style={{ width: '15rem', maxHeight: '350px'}} id={id} key={id}>
        <Card.Img variant="top" className='cardImage' src={image} width='286' height='180' />
        <Card.Body style={{backgroundColor: '#212529', color: 'white'}}>
            <Card.Title className='text-capitalize'>{moviename}</Card.Title>
            {/* <Card.Text className='text-capitalize' style={{fontSize: '10px'}}>
                title: {title}
            </Card.Text>
            <Card.Text className='text-capitalize' style={{fontSize: '10px'}}>
                category: {category}
            </Card.Text> */}
        </Card.Body>
        </Card>
    );
}

export default MovieCard
