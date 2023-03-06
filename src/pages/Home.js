import React, {useEffect} from "react";
import { usePrismicDocumentsByType,useSinglePrismicDocument } from "@prismicio/react";
import CategoryList from "../components/CategoryList";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const path = useLocation()
    useEffect(() => {
      if(path.pathname === '/'){
        navigate('/blog')
      }
    }, [navigate, path])

    const [homeDoc] = useSinglePrismicDocument("homepage")
    const [cat] = usePrismicDocumentsByType("category")
    if (homeDoc && cat) {
      return (
          <div>
              <Layout>
                  <Header
                      image={homeDoc.data.mainimage}
                      headline={homeDoc.data.headline}
                      description={homeDoc.data.description}
                      categories={cat.results}
                      />
                  <Outlet/>
              </Layout>
          </div>
      )
    }
}

export default Home