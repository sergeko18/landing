import React from "react";
import { Container } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Forma.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Forma: React.FC = () => {
  window.scrollTo(0, 0);
  const token = "5734959432:AAHRxlxPajS8YF5oMrdtgIDbMRgOhmDtPL0";
  const chatId = "-516579185";

  const [sented, setSented] = React.useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      comment: "",
    },
    mode: "onChange",
  });

  const fetchData = async (message: any) => {
    await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`
    );
  };

  const onSubmit = (values: any) => {
    fetchData(JSON.stringify(values));
    alert("Дякуємо, ми зв'яжемося з вами найближчим часом");
    window.location.href = "/";
  };

  return (
    <Container className={styles.root} style={{ width: "375px" }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Замовити дзвінок
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Ім'я"
          type="name"
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          {...register("name", { required: "Як до Вас звертатися" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          {...register("number", { required: "Вкажіть номер телефону" })}
          label="0956200011"
          helperText={errors.number?.message}
          fullWidth
          type="text"
          error={Boolean(errors.number?.message)}
        />
        <TextField
          className={styles.field}
          {...register("comment", { required: "Яка послуга вас зацікавила" })}
          label="Коментар"
          helperText={errors.comment?.message}
          fullWidth
          type="comment"
          error={Boolean(errors.comment?.message)}
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Відправити
        </Button>
      </form>
    </Container>
  );
};

export default Forma;
