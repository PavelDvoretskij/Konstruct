import $ from "jquery";

$(function () {
    const $form = $(".newsletter__form");
    const $input = $(".newsletter__input");

    $form.on("submit", function (e) {
        e.preventDefault();

        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
            $input.val()
        );
            if (!validEmail) {
                console.log(1)
                $input.css("outline", "3px solid #FB5555");
            } else {
                console.log(2)
                $input.css("outline", "none");
            }
    });
});
