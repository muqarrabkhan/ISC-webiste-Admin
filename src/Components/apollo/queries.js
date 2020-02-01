import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation adminLogin($email:String!,$password:String!){
    adminLogin(email:$email , password:$password){
      response
    }
  }

`

export const getSinglePost = (id) =>
    gql`{
      singlePost(id:"${id}") {
        title
        id
        publishdate
        type
        template
        content
        status
        metas
        tags{
          id
          title
          image
          metas
          content
          slug
          doctors{
            id
            title
            slug
            featuredImage
          }
        }
      }
    }`;

export const GET_SINGLE_POST_WITH_LATEST = (id, type, range) =>
    gql`{
      singlePost(id:"${id}") {
        title
        id
        publishdate
        type
        template
        content
        status
        metas
      },
      latestPosts(range: ${range}, type: "${type}"){
        title
        type
        id
        slug
        publishdate
      }
    }`;

export const GET_SINGLE_DOCTOR = (id, type, range) => gql`{
      singleDoctor(id:"${id}") {
         id
         firstName
         lastName
         title
         content
         specialties
         functions
         publishedDate
         specialties
         patientStories
         testimonials
         infoVideo
         featuredImage
         fax
         phone
         type
         locationDetails{
            id
            title
            content
            slug
         }
         tags{
           id
         }
       }
       latestPosts(range: ${range}, type: "${type}"){
        title
        type
        id
        slug
        publishdate
      }
     }`;


export const getSiteOptions =
    gql`{
      siteOptions{
        id
        optionKey
        optionType
        optionValue
      }
    }`;


export const GET_SINGLE_LOCATION = (id) => gql`{
      singleLocation(id:"${id}") {
         id
         title
         slug
         content
         address
         lat
         lng
         city
         country
         zipcode
         phone
         fax
         pic
         metas
         tags{
           id
           title
         }
         doctorDetails{
          title
          slug
          featuredImage
          type
        }
        }
      }`;

export const GET_POSTS = (id) => gql`{
    posts(type:"${id}") {
                title
                id
                publishdate
                type
                template
                content
                status
                metas
                slug
                cat{
                  id
                  name
                }
                tags{
                  id
                }
    }
}`;

export const GET_TESTIMONIALS = (id) => gql`{
    posts(type:"${id}") {
                id
                type
                publishdate
                metas
                cat{
                  id
                  name
                }
                tags{
                  id
                  title
                }
    }
}`;

export const GET_POSTS_WITH_LATEST = (id, type, range) => gql`{
    posts(type:"${id}") {
                title
                id
                publishdate
                type
                template
                content
                status
                metas
                slug
                cat{
                  id
                  name
                }
                tags(type: "blog"){
                  id
                  title
                }
               },
    latestPosts(range: ${range}, type: "${type}"){
                title
                type
                id
                slug
                publishdate
              }
}`;

export const GET_LATEST_BLOGS_AND_NEWS = (range, type) => gql`{
    latestPosts(range: ${range}, type: "${type}"){
                title
                type
                id
                slug
                content
                publishdate
                metas
              }
}`;

export const SITE_MAP = gql`{
  posts(type: "page"){
      title
      slug
      type
  },
  doctors{
     title
     slug      
     type
   }
  locations{
     title
     slug
  }
}`;

export const GET_SINGLE_FORM = (id) => gql`{
  singleFormBuilder(id: "${id}"){
    id
    title
    controls
    data
    forms{
      id
      data
      form_id
    }
  }

}`;

export const SUBMIT_FORM =  gql`
    mutation createFormSubmission(
     $form_id: Int!
     $data:JSON!
   ) {
    createFormSubmission(
        form_id: $form_id
        data: $data
     ) {
     id
    }
  }
`;

export const SPECIALITY_DETAILS = (id) => gql`{
  singleTag(id: "${id}"){
  id
  title
  content
  metas
  image
  tags{
  id
  title
  content
  metas
  slug
  }
  posts(type: "blog"){
      id
      title
      publishdate
      type
      slug
  }
  }
  }`;

export const LOCTIONS_SEARCH = gql`{
  tags{
    id
    title
  }
  locations{
      id
    	title
    	pic
  }
}`;

export const GET_DOCTORS = (type) => gql`{
   doctors(type: "${type}"){
    id
    showForms
    externalLink
    formType
    firstName
    lastName
    functions
    fax
    phone 
    type
  }
}
`;

export const SEARCH = (key) => gql`{
  search(key: "${key}"){
    title
    slug
    type
    content
  }
}`;