json.array! @reviews do |review|
  json.extract! review, :id, :body
  json.username review.user.username
  json.user_id review.user.id
end
