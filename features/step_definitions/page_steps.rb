Given(/^I visit the (.+) page$/) do |page|
    page = page.page_class.new
    page.load
    expect(page).to be_displayed
    @page = page
end

Given(/^I fill in the (.+)$/) do |field_name|
    @page.send('fill_in_' + field_name._case)
end

Given(/^I submit$/) do
    @page.submit
end

Then(/^I should see a (.+)$/) do |what|
    expect(@page.send(what._case)).to be_visible
end
