layout 'layout.html.erb'

before 'index.html.erb', 'article0.html.erb', 'article1.html.erb', 'article2.html.erb', 'article3.html.erb', 'article4.html.erb', 'article5.html.erb', 'article6.html.erb', 'article7.html.erb'  do
  @articles = Dir.entries("../articles")
  @articles.delete(".")
  @articles.delete("..")
  @articles.sort! { |x,y| File.mtime("../articles/#{y}") <=> File.mtime("../articles/#{x}")}
end
