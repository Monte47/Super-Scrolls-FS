class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			Bookshelf.create(name: "Have Read", user_id: @user.id, default_shelf: true)
			Bookshelf.create(name: "Currently Reading", user_id: @user.id, default_shelf: true)
			Bookshelf.create(name: "Want to Read", user_id: @user.id, default_shelf: true)
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
