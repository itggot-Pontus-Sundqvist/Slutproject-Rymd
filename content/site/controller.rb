layout 'layout.html.erb'

before 'index.html.erb' do
  @articles = Dir.entries("../articles")
  @articles.delete(".")
  @articles.delete("..")
  @articles.sort! { |x,y| File.mtime("../articles/#{y}") <=> File.mtime("../articles/#{x}")}
end
