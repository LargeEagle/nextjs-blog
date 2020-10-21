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
    { field: 'userId'},
    { field: 'id'},
    { field: 'title',width:200},
    { field:  'completed'},
    
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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




<div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={
        posts.map((post) => ({...post}) )

      } columns={columns} pageSize={5} checkboxSelection />
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

export default Blog
