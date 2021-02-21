const path = require('path');

exports.createPages = async({ graphql, actions, reporter }) => {
        const { createPage } = actions;

        const result = await graphql(
            `query {
                allMicrocmsPickleApi {
                  edges {
                    node {
                      AboutPickle {
                        step1
                        step2
                        step3
                        step4
                        step5
                        type
                      }
                      Disclaimer {
                        text
                        type
                      }
                      HowToInstall {
                        step1
                        step2
                        step3
                        step4
                        step5
                        type
                      }
                      HowToUnInstall {
                        step1
                        step2
                        step3
                        step4
                        step5
                        type
                      }
                      HowToUse {
                        step1
                        step2
                        step3
                        step4
                        step5
                        type
                      }
                      PrivacyAssurance {
                        text
                        type
                      }
                      ReleaseNote {
                        date(formatString: "YYYY/MM/DD")
                        info
                        type
                      }
                      locale
                      type
                    }
                  }
                }
              }
            `
        );

        if (result.errors) {
            reporter.panicOnBuild(`Error while running GraphQL query.`);
            return;
        }

        const { edges } = result.data.allMicrocmsPickleApi;

        edges.forEach(
            edge => {
                createPage({
                      path: `/${edge.node.locale}`
                    , component: path.resolve(`./src/pages/locale.js`)
                    , context: {post: edge.node}
                });
            }
        );
};
