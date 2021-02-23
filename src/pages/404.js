import React from "react"
import Header from '../components/header';
import SEO from "../components/seo"
import Footer from '../components/footer';


const NotFoundPage = () => (
  <React.Fragment>
    <Header />
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </ React.Fragment>
)

export default NotFoundPage
