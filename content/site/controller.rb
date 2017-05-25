layout 'layout.html.erb'

before 'index.html.erb' do
  @articles = Dir.entries("../articles")
  @articles = @articles.slice!(2..11)
  @articles.sort! { |x,y| File.birthtime("../articles/#{y}") <=> File.birthtime("../articles/#{x}")}
end
