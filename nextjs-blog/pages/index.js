import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
//import fetch from 'node-fetch'
import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
//import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export  function Home({ allPostsData }) {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
/*
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
*/




function Blog({ posts }) {
  const classes = useStyles();


  const columns = [
    { field: 'userId',width:110},
    { field: 'id',width:80},
    { field: 'title',width:500},
    { field:  'completed',width:150},
    
  ];
  
  

  
  return (
    /*
    <div>
    <div><div className={utilStyles.PostDetailDiv}>user id</div><div className={utilStyles.PostDetailDiv}>title</div></div>
      {posts.map((post) => (
        <div>
        <div className={utilStyles.PostDetailDiv}>{ post.id}</div>
        <div className={utilStyles.PostDetailDiv}>{ post.title}</div>
        </div>
        
      ))}
    </div>
*/


<div className={classes.root}>




<div style={{ height: '600px', width: '100%' }}>
      <DataGrid rows={
        posts.map((post) => ({...post}) )

      } columns={columns} pageSize={20} loading={posts.length === 0} rowHeight={50} 
      rowsPerPageOptions={[20, 40, 80]}


      checkboxSelection />
    </div>

{ /*posts.map((post) => (
  <Paper className={classes.paper}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar>{ post.id}</Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography >{post.title}</Typography>
      </Grid>
    </Grid>
  </Paper> 
  
))*/} 

    </div>
)
}


function dataGrim({posts}) {
  const classes = useStyles();

  return(

    <div>
              <Container maxWidth="sm">

          <form className={classes.root} noValidate autoComplete="off">

          <TextField id="standard-search" label="Search field" type="search" />
</form>
    {posts.map((post) => (  
      <div>

  <Paper className={classes.paper}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar>{ post.id}</Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography >{post.title}</Typography>
      </Grid>
    </Grid>
  </Paper> 
  </div>
  ))}

  </Container>

 </div>

    )}

    function mainContent(){
return(

  {dataGrim}
)

    }


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default dataGrim
