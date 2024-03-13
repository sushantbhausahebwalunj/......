import { Container, Grid, Typography,Button,Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header2 from "../../Global/Header2";
import Advertisement from "../../Global/Advertisement";
import MyContext from "../context/ContextData";

function ArticleContent() {
  const {addToSave} = useContext(MyContext)
  const { title } = useParams();

  useEffect(() => {
    // Fetch the article content using the title
  }, [title]);



  return (
    <div>
      <Header2 />
      <div style={{ backgroundColor: "white" }}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <Typography variant="h4" component="h2" gutterBottom >
  {title}
</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" component="h2" gutterBottom>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat modi voluptate magni sint, quam porro, dignissimos incidunt libero impedit qui. Officia blanditiis voluptates nemo dolorem eligendi odio, reiciendis ea?
                  Accusantium repudiandae molestiae at, unde corrupti maiores quaerat tempore, voluptates, animi provident tempora cupiditate veniam doloribus quisquam nulla commodi recusandae veritatis ad magnam vel. Aliquam incidunt quos sint velit optio?
                  Nesciunt sint autem voluptatibus. Similique, neque eaque! Saepe obcaecati eum, dolore ipsum laboriosam voluptate dicta quasi est. Perferendis adipisci modi deleniti, est eaque itaque ut incidunt debitis asperiores consequuntur aspernatur?
                  Commodi esse aut blanditiis vel unde tempora debitis perspiciatis nesciunt ab modi ipsam, corrupti dignissimos qui repellendus deleniti ducimus autem sunt quibusdam totam sint. Reprehenderit eligendi quae exercitationem natus fuga?
                  Non suscipit amet molestiae aut odit! Eaque cumque, ducimus veritatis minima iusto molestiae. Ratione maiores quidem reprehenderit ut? Accusamus doloribus quas hic. Deleniti molestiae tempora deserunt odio natus incidunt dolor!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit officiis voluptates, fuga magni quasi non eaque cupiditate. Corporis magni deserunt praesentium labore sint consectetur, reiciendis vitae magnam adipisci delectus.
                  Voluptatibus incidunt cum ipsa ex quam molestias perferendis unde at laudantium velit iusto ea, officiis eveniet provident esse vitae! Aspernatur sequi quo corporis, eaque laboriosam deleniti ex est harum adipisci.
                  Reprehenderit dolores quia voluptatum dolore quae natus, odio nemo. Facilis eveniet fuga itaque, non doloremque, illo rem culpa, earum dolore veritatis officia. Quia, ipsa? Quam adipisci sit quisquam explicabo! Itaque!
                  Eum excepturi maiores, minus animi explicabo voluptatibus, repellendus velit dignissimos qui maxime distinctio, iusto dicta? Totam eum magni, fugiat omnis delectus distinctio quam soluta eaque maxime quia. Placeat, aliquid velit!
                  Dolorem nobis possimus maxime voluptatem, provident eveniet delectus repellendus aliquam quisquam porro qui ipsa sint fuga eius consequuntur eum voluptates a? Nesciunt provident itaque, accusamus repellat possimus tenetur quasi nihil?
                </Typography>
              </Grid>
              <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
    <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
      Save
    </Button>
    <Button variant="contained" color="error">
      Report
    </Button>
  </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Advertisement />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ArticleContent;
