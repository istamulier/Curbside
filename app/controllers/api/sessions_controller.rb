class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Sorry, we don't recognize that username and/or password"], status: 401
    end
  end

  def destroy
    #@user = current_user
    if current_user
      logout()
      render json: ["you logged out!"]
    else
      render json: ["Nobody is signed into Curbside right now"], status: 404
    end
  end
end
