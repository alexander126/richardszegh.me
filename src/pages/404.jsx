import React from 'react';
import {navigate} from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/utils/Seo';

export default function NotFound() {
  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Layout>
      <Seo title="404: Not found" />
    </Layout>
  );
}
