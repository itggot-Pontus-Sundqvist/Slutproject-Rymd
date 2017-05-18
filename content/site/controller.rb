layout 'layout.html.erb'


before 'article.html.erb' do
  @articles = Dir.entries("../articles")
  @articles.delete_at(0)
  @articles.delete_at(0)
end
