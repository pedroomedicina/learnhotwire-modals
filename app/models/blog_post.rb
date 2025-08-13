class BlogPost < ApplicationRecord
    validates :title, :body, presence: true
    broadcasts_refreshes
end
