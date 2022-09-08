class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/review" do
    review = Review.all.order(:variety)
    review.to_json
  end

  post '/reviews' do
    review = Review.create(
    ordernumber: params[:ordernumber],
    comment: params[:comment],
    laundry_id: params[:laundry_id],
    user_id: params[:user_id]
  )
  review.to_json 
  end

  post '/laundry' do
    laundry = Laundry.create(
    name: params[:name],
    variety: params[:variety],
    price: params[:price]
  )
  laundry.to_json 
  end

  post '/user' do
    user = User.create(
    name: params[:name]
  )
  user.to_json 
  end

  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      ordernumber: params[:ordernumber],
      comment: params[:comment]
    )
    review.to_json
  end



end
