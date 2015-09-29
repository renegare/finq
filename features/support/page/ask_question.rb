class AskQuestionPage < SitePrism::Page
    set_url '/'

    element :message, "textarea"

    element :submit, "button[type=submit]"

    element :confirmation_of_submission, "#confirmed-submission"

    def fill_in_message_field
        message.set Faker::Lorem.words.join(' ')
    end
end
