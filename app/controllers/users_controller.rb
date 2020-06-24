class UsersController < ApplicationController
  before_action :require_signed_in!, only: [:show]
  before_action :require_signed_out!, only: [:new, :create]
  
  def new
    @user = User.new
  end

  def index 
    @users = User.all
    render :index
  end
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      #fix with redirect_to url 
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email , :password)
  end
end
