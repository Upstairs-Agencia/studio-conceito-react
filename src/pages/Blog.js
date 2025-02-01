import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Blog = () => {
  const posts = [
    { title: 'O futuro do escritório é híbrido!', date: 'abril 15, 2024', image: 'images/blogImg/blog1.png' },
    { title: 'Tendências da arquitetura corporativa', date: 'abril 15, 2024', image: 'images/blogImg/blog2.png'},
    { title: 'Turn Key ou chave na mão', date: 'abril 15, 2024', image: 'images/blogImg/blog3.png' },
  ];

  return (
    <div>
      {/* Seção de cabeçalho do Blog */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <h1 className="fw-bold">Blog</h1>
            </MDBCol>
            <MDBCol md="6" className="text-end">
              <img
                src="https://placehold.co/200x150" // Imagem maior para seguir o padrão original
                alt="Padrão gráfico"
                style={{ maxWidth: '200px', marginRight: '4rem' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção dos posts */}
      <section className="py-5">
        <MDBContainer>
          <MDBRow>
            {posts.map((post, index) => (
              <MDBCol key={index} md="4" className="mb-4">
                <MDBCard 
                className="h-100 border-0"
                style={{ textDecoration: 'none' , border: 'none'}}
                >
                  <MDBCardImage src={post.image} position="top" alt={post.title} />
                  <MDBCardBody>
                    <MDBCardTitle className="fw-bold">
                      <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                        {post.title}
                      </a>
                    </MDBCardTitle>
                    <p className="text-muted mb-0">
                      {post.date}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Blog;
