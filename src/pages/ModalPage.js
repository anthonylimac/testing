import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      {" "}
      I Accept{" "}
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      {showModal && modal}
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis
        dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
        leo congue, tempus mauris id, tempor leo. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer condimentum risus felis, in
        gravida neque hendrerit non. Proin eu nulla et lorem posuere dapibus sit
        amet sit amet tortor. Nunc fermentum felis in pretium porttitor. Sed
        mollis, enim ac laoreet commodo, tortor erat ullamcorper elit, id semper
        nisi lacus et felis. Ut ultricies tempor elit, venenatis sagittis dui
        dignissim sit amet. Nunc laoreet, libero a pellentesque semper, lacus
        eros placerat mi, iaculis porta diam sem sed lacus.
      </p>
    </div>
  );
}

export default ModalPage;
