require "sinatra/activerecord/rake"
require "./server"

desc "fetch stories from RSS feed"
task :fetch_stories, [:url] do |t, args|
  Story.fetch_from(args[:url])
end
