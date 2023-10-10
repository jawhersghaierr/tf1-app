import { gql } from "@apollo/client";

export const QUERY_THUMBNAILS_LIST = gql`
  query ThumbnailsList($limit: Int!, $offset: Int!) {
    thumnail(limit: $limit, offset: $offset) {
      id
      url
      alt
    }
  }
`;
