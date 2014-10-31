class Story < ActiveRecord::Base
  def self.fetch_from(url)
    f = Feedjira::Feed.fetch_and_parse(url)

    f.entries.each do |e|
      unless Story.where(url: e.url).present?
        Story.create(title: e.title,
                     url: e.url,
                     story_content: e.content)

        puts "Story #{e.title} added!"
      end
    end
  end
end
