layout 'layout.html.erb'


before 'index.html.erb' do
  @articles = Dir.entries("../articles")
  p @articles
  @articles = @articles.slice!(2..11)
  p @articles

  @articles.sort! { |x,y| File.birthtime("../articles/#{y}") <=> File.birthtime("../articles/#{x}")}
end
