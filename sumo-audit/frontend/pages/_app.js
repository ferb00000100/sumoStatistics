// _app component is used to initialize pages
// persisting layout between pages
// Keeping state
// To override the default `App` create the file `./pages/_app.js`



import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';


class SumoApp extends App {
    static async getInitialProps({ Component, ctx }){
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // This exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }
    render() {
        const { Component, apollo, pageProps } = this.props;
        // Component will be index, or NavBar when we visit the page.
        return(
            <Container>
                <ApolloProvider client={apollo}>
                <Page>
                    <Component { ...pageProps } />
                </Page>
                </ApolloProvider>
            </Container>
        )
    }
}


export default withData(SumoApp);

