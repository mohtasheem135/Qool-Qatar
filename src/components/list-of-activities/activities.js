import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router';

const Activities = () => {

    const navigate = useNavigate();

    var allStoredIds = JSON.parse(localStorage.getItem("subcategories"));

    const renderUI = a => {
    
                return(
                    <Col lg={4} onClick={()=> handelClick(a)}>
                        <div className="activity">
                            <img src={a.photoUrl} alt="place" />
                            <p className="title">{a.name}</p>
                            {/* <p className="company">By <a href='/vendor-page'>{localStorage.getItem("categoryName")}</a></p> */}
                            <p className="my-cat">{a.packages.length >=1 &&  a.packages.length + " Packages available"} </p>
                        </div>
                    </Col>
                )
    }
      


    const activities = (data) => {
         if(data.name) {
            return renderUI(data)
         } else {
            return data.map(d => {
                let a =  d?.categoryId;
                return renderUI(a);
               
            });
         }
        }
       
     
    const handelClick=(data)=> {
        if(data?.coordinates?.length) {
            localStorage.setItem("packageCategoryId",data._id);
            navigate('/destination-page');
            window.location.reload();
        }
      
    }

    return (
        <section className="activity-box">
            <Container >
                <Row>
                    {activities(allStoredIds)}
                </Row>
            </Container>
        </section>
    )
}

export default Activities;
