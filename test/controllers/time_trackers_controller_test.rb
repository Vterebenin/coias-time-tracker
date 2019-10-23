require 'test_helper'

class TimeTrackersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @time_tracker = time_trackers(:one)
  end

  test "should get index" do
    get time_trackers_url, as: :json
    assert_response :success
  end

  test "should create time_tracker" do
    assert_difference('TimeTracker.count') do
      post time_trackers_url, params: { time_tracker: { desc: @time_tracker.desc, time: @time_tracker.time } }, as: :json
    end

    assert_response 201
  end

  test "should show time_tracker" do
    get time_tracker_url(@time_tracker), as: :json
    assert_response :success
  end

  test "should update time_tracker" do
    patch time_tracker_url(@time_tracker), params: { time_tracker: { desc: @time_tracker.desc, time: @time_tracker.time } }, as: :json
    assert_response 200
  end

  test "should destroy time_tracker" do
    assert_difference('TimeTracker.count', -1) do
      delete time_tracker_url(@time_tracker), as: :json
    end

    assert_response 204
  end
end
