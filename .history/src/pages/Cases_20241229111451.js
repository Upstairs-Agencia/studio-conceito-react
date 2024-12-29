import React from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from "mdb-react-ui-kit";
import Navbar from '../components/navbar';
import Footer from '../components/footer';



const caseStudies = [
  {
    title: "Case 1",
    description: "txt",
    image: "https://via.placeholder.com/700x400",
  },
  {
    title: "Case 2",
    description: "txt",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Case 3",
    description: "txt",
    image: "https://via.placeholder.com/900x400",
  },
  {
    title: "Case 4",
    description: "txt",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Case 5",
    description: "txt",
    image: "https://via.placeholder.com/900x400",
  },
  {
    title: "Case 6",
    description: "txt",
    image: "https://via.placeholder.com/600x400",
  },
];

function Cases() {
  return (
    <div style={{ backgroundColor: 'black' }}>
    <Navbar />
    <MDBContainer className="my-5">

      <h1 className="text-center mb-4"style={{alignItems: 'left', color: 'white', fontWeight: 'bold'}}>Cases</h1>
      <MDBRow>
        <MDBCol md="6">
          {caseStudies.slice(0, 3).map((caseItem, index) => (
            <MDBCard key={index} className="mb-4">
              <MDBCardImage
                src={caseItem.image}
                position="top"
                alt={`Imagem do ${caseItem.title}`}
              />
              <MDBCardBody>
                <MDBCardTitle>{caseItem.title}</MDBCardTitle>
                <MDBCardText>{caseItem.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBCol>
        <MDBCol md="6">
          {caseStudies.slice(3).map((caseItem, index) => (
            <MDBCard key={index} className="mb-4">
              <MDBCardImage
                src={caseItem.image}
                position="top"
                alt={`Imagem do ${caseItem.title}`}
              />
              <MDBCardBody>
                <MDBCardTitle>{caseItem.title}</MDBCardTitle>
                <MDBCardText>{caseItem.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBCol>
        <MDBCol md="6">
          {caseStudies.slice(3).map((caseItem, index) => (
            <MDBCard key={index} className="mb-4">
              <MDBCardImage
                src={caseItem.image}
                position="top"
                alt={`Imagem do ${caseItem.title}`}
              />
              <MDBCardBody>
                <MDBCardTitle>{caseItem.title}</MDBCardTitle>
                <MDBCardText>{caseItem.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBCol>
        <MDBCol md="6">
          {caseStudies.slice(3).map((caseItem, index) => (
            <MDBCard key={index} className="mb-4">
              <MDBCardImage
                src={caseItem.image}
                position="top"
                alt={`Imagem do ${caseItem.title}`}
              />
              <MDBCardBody>
                <MDBCardTitle>{caseItem.title}</MDBCardTitle>
                <MDBCardText>{caseItem.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer />
    </div>
    
  );
}

export default Cases;
