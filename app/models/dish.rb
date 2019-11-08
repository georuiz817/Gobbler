class Dish < ApplicationRecord
    validates :main, presence: true
    validates :side_one, presence: true
    validates :side_two, presence: true
    validates :drink, presence: true
end
