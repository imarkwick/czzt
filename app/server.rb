require 'sinatra'

set :public, Proc.new { File.join(root, "..", "public") }

get '/' do 
	erb :index
end