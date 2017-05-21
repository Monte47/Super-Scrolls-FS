json.array! @reviews do |review|
  json.extract! review, :body
  json.username review.user.username
end
