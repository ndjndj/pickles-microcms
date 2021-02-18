
// ファイルパスを操作するモジュールをインポート
const path = require("path")

// ページ生成
exports.createPages = async ({ graphql, actions }) => {
// 　actionsの中からcreatepageメソッドを取り出して分割代入
  const { createPage } = actions
// 　GraphQLでmicroCMSから取得してきたデータ（記事IDとスラッグ）を定数resultに代入
  const result = await graphql(
  // ここからクエリ文
    `
     {
       query allMicrocmsLocaleInfo {
         edges {
           node {
             type
             enId
             createdAt
           }
         }
       }
     }
   `
  // クエリ文終わり
  )

  // 定数resultにデータ代入が失敗した場合、エラーを投げて処理を止める
  if (result.errors) {
    throw result.errors
  }

  // 変数resultにデータの代入が成功した場合、記事データ一つ一つに関して
  result.data.postQuery.edges.forEach(edge => {
    // ページを生成
    createPage({
      // 記事ページのURLの末尾を設定
      path: `/${edge.node.enId}`,
      // ページのテンプレートファイルを指定
      component: path.resolve(
        "./src/pages/index.js"
      ),
      // テンプレートファイルに渡すデータの変数名と値を設定
      context: {
        id: edge.node.enId,
      },
    })
  })

}
