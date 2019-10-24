class TimeTrackersController < ApplicationController
  before_action :set_time_tracker, only: [:show, :update, :destroy]
 # before_action :authenticate_user!

  # GET /time_trackers
  def index
    @time_trackers = current_user.time_trackers.all
    render json: @time_trackers
  end

  def getUserUid
    render json: current_user
  end

  # GET /time_trackers/1
  def show
    render json: @time_tracker
  end

  # POST /time_trackers
  def create
    @time_tracker = current_user.time_trackers.build(time_tracker_params)

    if @time_tracker.save
      render json: @time_tracker, status: :created, location: @time_tracker
    else
      render json: @time_tracker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /time_trackers/1
  def update
    if @time_tracker.update(time_tracker_params)
      render json: @time_tracker
    else
      render json: @time_tracker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /time_trackers/1
  def destroy
    @time_tracker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_time_tracker
      @time_tracker = TimeTracker.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def time_tracker_params
      params.require(:time_tracker).permit(:time, :desc)
    end
end
