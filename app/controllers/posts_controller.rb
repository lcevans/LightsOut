class PostsController < ApplicationController
	respond_to :json

	def index
		@posts = Post.all
		render :json => @posts
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		head :ok
	end

	def create
		@post = Post.new(params[:post])
		if @post.save
			render :json => @post
		else
			render :json => @post.errors.full_messages, :status => 422
		end
	end

	def update
		@post = Post.find(params[:id])
		if @post.update_attributes(params[:post])
			render :json => @post
		else
			render :json => @post.errors.full_messages, :status => 422
		end
	end

end
