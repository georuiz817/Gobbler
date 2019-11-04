require 'test_helper'

class DishesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dish = dishes(:one)
  end

  test "should get index" do
    get dishes_url, as: :json
    assert_response :success
  end

  test "should create dish" do
    assert_difference('Dish.count') do
      post dishes_url, params: { dish: { drink: @dish.drink, main: @dish.main, side_one: @dish.side_one, side_two: @dish.side_two } }, as: :json
    end

    assert_response 201
  end

  test "should show dish" do
    get dish_url(@dish), as: :json
    assert_response :success
  end

  test "should update dish" do
    patch dish_url(@dish), params: { dish: { drink: @dish.drink, main: @dish.main, side_one: @dish.side_one, side_two: @dish.side_two } }, as: :json
    assert_response 200
  end

  test "should destroy dish" do
    assert_difference('Dish.count', -1) do
      delete dish_url(@dish), as: :json
    end

    assert_response 204
  end
end
