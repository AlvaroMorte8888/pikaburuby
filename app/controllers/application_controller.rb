class ApplicationController < ActionController::Base
  before_action :authenticate_user! #зайти может только залогиненый человек
end
